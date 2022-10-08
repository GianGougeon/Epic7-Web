/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState} from "react";
import { useAppContext } from "./../../components/context/AppContext";

const test = () => {
    const checkBoxes = [
        {
          id: 1,
          value: 5,
          checked: false
        },
        {
          id: 2,
          value: 4,
          checked: false
        },
        {
          id: 3,
          value: 3,
          checked: false
        }
      ];
    
      const [posts, setPosts] = useState(checkBoxes);
    
      const handleChange = (id) => {
        // siempre un input tiene que estar activado
        // si todos estan desactivados, activa el primero y no deja desactivar
        if (1 > posts.filter((post) => post.checked === true).length) {
            setPosts(
                posts.map((post) => {
                    if (post.id === id) {
                        return {
                            ...post,
                            checked: true
                        };
                    }
                    return post;
                })
            );
        } else {
            setPosts(
                posts.map((post) => {
                    if (post.id === id) {
                        return {
                            ...post,
                            checked: !post.checked
                        };
                    }
                    return post;
                })
            );
        }
        };
    
      return (
        <div className="App" style={{
            marginTop: "200px",
            color: "black",
            margin: "200px",
            display: "flex",
            flexDirection: "column",
        }}>
          {posts.map((item) => {
            console.log(item);
            return (
              <div key={item.id}>
                <label htmlFor={item.id}>{item.value}</label>
                <input
                  type="checkbox"
                  name={item.value}
                  checked={item.checked}
                  onChange={() => handleChange(item.id)}
                />
              </div>
            );
          })}
        </div>
      );
};

export default test;
