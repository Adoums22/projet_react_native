import React, { useReducer, useRef, useState } from "react";

export function ThreeScreen() {
    const inputRef = useRef();
    const [isFormValidated, setFormValidation] = useState(false);
    const [items, dispatch] = useReducer((state: string[], action: { type: string, payload?: string, index?: number }) => {
      switch (action.type) {
        case 'add':
          state.push(action.payload ?? ''); return state;
        case 'remove': // keep every item except the one we want to remove
          return state.filter((_, index) => index != action.index);
        default:
          return state;
      }
    }, []);
    function handleSubmit(e: any) {
      e.preventDefault(); dispatch( {type: 'add', payload: inputRef.current?.value});
      inputRef.current!.value = ''; setFormValidation(!isFormValidated);
    }
    return (
        <>
          <form onSubmit={handleSubmit} style={{ marginBottom: '20px', width: '100%', display: 'flex' }}>
            <input ref={inputRef} style={{ flex: '1', padding: '5px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
            <button type="submit" style={{ padding: '5px 10px', borderRadius: '5px', background: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Add</button>
          </form>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            {items.map((item, index) => (
              <li key={index} style={{ marginBottom: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span color="white">{item}</span>
                <button onClick={() => dispatch({ type: 'remove', index })} style={{ background: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer' }}>Remove</button>
              </li>
            ))}
          </ul>
        </>
      );          
}  