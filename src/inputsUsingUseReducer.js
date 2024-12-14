// // this is the first solution using only the useReducer and the code was written in more than 107 line 

// import {useReducer} from 'react';

// export default function InputForm2(){
//     // styling
//     const checkBoxStyling = {accentColor:"pink",border:"1px solid transparent",borderRadius:"50%"}
//     const buttonStyling ={width:"120px",height:"40px",backgroundColor:"green",color:"white",border:"1px solid transparent",borderRadius:"5px",textTransform:"capitalize",fontSize:"16px"}
   
//     // useState hook construction
//     let initState = {
//             firstName:"",
//             lastName:"",
//             email:"",
//             contact:null,
//             option1:false,
//             option2:false,
//             option3:false,
//             option4:false,
//             option5:false,
//             option6:false,
//             file:null,
//             url:"",
//             option7:false,
//             option8:false,
//             option9:false,
//             textArea:""}

//             function reducer(state,action){
//                 if(action.type==="updatingField"){
//                     return {...state,firstName:action.firstName,lastName:action.lastName,email:action.email,contact:action.contact,option1:action.option1}
//                 }else{
//                     return {state}
//                 }
//             }

//     let [state, dispatch] = useReducer(reducer,initState)

   

//     const handleChange = (e)=>{
//         const {firstName,lastName,email,contact,option1} = e.target.value
//         dispatch({type:"updatingField",firstName,lastName,email,contact,option1})
//     }

//     return (
//         <>
//         <form className="formStyling">
//             <div style={{display:"flex",justifyContent:"center",flexDirection:"column",width:"70%",gap:"5px"}}>
//                 <label>first name</label>
//                 <input className='firstCon' placeholder="insert your first name" value={state.firstName} onChange={handleChange}/>

//                 <label>last name</label>
//                 <input className='firstCon' type="text" placeholder="insert your last name" value={state.lastName} onChange={handleChange}/>
                
//                 <label>insert your email</label>
//                 <input className='firstCon' type="email" placeholder="insert your email"/>
                
//                 <label>contacts</label>
//                 <input className='firstCon' type="number" placeholder="insert your contact"/>
//             </div>

//             <div style={{display:"flex",justifyContent:"center",flexDirection:"row",gap:"20px", margin:"20px auto"}}>
//                 <label>gender ||</label>
//                 <input style={checkBoxStyling} type="checkbox" id="one"/> <label for="one" value={state.option1} onChange={handleChange}>male</label>
//                 <input style={checkBoxStyling} type="checkbox" id="two"/> <label for="two">female</label>
//                 <input style={checkBoxStyling} type="checkbox" id="three"/> <label for="three">other</label>
//             </div>

//             <div style={{display:"flex",justifyContent:"center",flexDirection:"row",gap:"20px", margin:"20px auto"}}>
//             <label>your best subject ||</label>
//                 <input style={checkBoxStyling} type="checkbox" id="onee" /> <label for="onee">math</label>
//                 <input style={checkBoxStyling} type="checkbox" id="twoo"/> <label for="twoo">physics</label>
//                 <input style={checkBoxStyling} type="checkbox" id="threee"/> <label for="threee">other</label>
//             </div>
//             <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row",gap:"20px", padding:"auto 20px"}}>
//                 <label>upload your resumee ||</label>
//                 <input type="file" />
//             </div>
            
//             <div style={{display:"flex",justifyContent:"center",flexDirection:"column",width:"70%",gap:"5px", margin:"20px auto"}}>
//                 <label>insert the link</label>
//                 <input className='firstCon' type="URL" />
//             </div>
          
//             <div style={{display:"flex",justifyContent:"center",flexDirection:"column",width:"70%",gap:"5px", margin:"10px auto"}}>
//                 <label>select the correct answer</label>
//                 <select style={{textTransform:"capitalize", height:"40px"}}>
//                     <option>ali</option>
//                     <option>ahmed</option>
//                     <option>mohaned</option>
//                 </select>
//             </div>

//             <div style={{display:"flex",justifyContent:"center",flexDirection:"column",width:"70%",gap:"5px", margin:"10px auto"}}>
//                 <label>add a comment</label>
//                 <textArea placeholder="about yourself" style={{padding:"20px",textTransform:"capitalize"}}/>
//             </div>

//             <div style={{display:"flex",justifyContent:"center",flexDirection:"column",width:"70%",gap:"5px", margin:"10px auto"}}>
//                 <label>submit or reset</label>
//                 <div style={{display:"flex",justifyContent:"space-between",flexDirection:"row",gap:"20px"}}>
//                     <button style={buttonStyling}>reset</button>
//                     <button style={buttonStyling}>submit</button>
//                 </div>
//             </div>
//         </form>
//         </>
//     )
// }

import { useReducer } from 'react';

export default function InputForm2() {
    // Styling
    const checkBoxStyling = {
        accentColor: "pink",
        border: "1px solid transparent",
        borderRadius: "50%"
    };
    const buttonStyling = {
        width: "120px",
        height: "40px",
        backgroundColor: "green",
        color: "white",
        border: "1px solid transparent",
        borderRadius: "5px",
        textTransform: "capitalize",
        fontSize: "16px"
    };

    // Initial State
    const initState = {
        firstName: "",
        lastName: "",
        email: "",
        contact: null,
        option1: false,
        option2: false,
        option3: false,
        option4: false,
        option5: false,
        option6: false,
        file: null,
        url: "",
        option7: false,
        option8: false,
        option9: false,
        textArea: ""
    };

    // Reducer Function
    function reducer(state, action) {
        switch (action.type) {
            case "updatingField":
                return { ...state, [action.field]: action.value };
            case "reset_all_inputs" : return {state} ; 
            default:
                return state;
        }
    }

    // useReducer Hook
    const [state, dispatch] = useReducer(reducer, initState);

    // Handle Input Change
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        dispatch({
            type: "updatingField",
            field: name,
            value: type === "checkbox" ? checked : value
        });
    };

    const handleReset =()=>{
        dispatch({type:"reset_all_inputs"})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(state)
    }
    return (
        <>
            <form className="formStyling">
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", width: "70%", gap: "5px" }}>
                    <label>First Name</label>
                    <input
                        className="firstCon"
                        name="firstName"
                        placeholder="Insert your first name"
                        value={state.firstName}
                        onChange={handleChange}
                    />

                    <label>Last Name</label>
                    <input
                        className="firstCon"
                        name="lastName"
                        type="text"
                        placeholder="Insert your last name"
                        value={state.lastName}
                        onChange={handleChange}
                    />

                    <label>Insert Your Email</label>
                    <input
                        className="firstCon"
                        name="email"
                        type="email"
                        placeholder="Insert your email"
                        value={state.email}
                        onChange={handleChange}
                    />

                    <label>Contacts</label>
                    <input
                        className="firstCon"
                        name="contact"
                        type="number"
                        placeholder="Insert your contact"
                        value={state.contact || ""}
                        onChange={handleChange}
                    />
                </div>

                <div style={{ display: "flex", justifyContent: "center", flexDirection: "row", gap: "20px", margin: "20px auto" }}>
                    <label>Gender ||</label>
                    <input
                        style={checkBoxStyling}
                        type="checkbox"
                        id="one"
                        name="option1"
                        checked={state.option1}
                        onChange={handleChange}
                    /> <label htmlFor="one">Male</label>
                    <input style={checkBoxStyling} type="checkbox" id="two" name="option2" checked={state.option2} onChange={handleChange} /> <label htmlFor="two">Female</label>
                    <input style={checkBoxStyling} type="checkbox" id="three" name="option3" checked={state.option3} onChange={handleChange} /> <label htmlFor="three">Other</label>
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", gap: "20px", padding: "auto 20px" }}>
                    <label>Upload Your Resumee ||</label>
                    <input type="file" name="file" onChange={handleChange} />
                </div>

                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", width: "70%", gap: "5px", margin: "20px auto" }}>
                    <label>Insert the Link</label>
                    <input
                        className="firstCon"
                        name="url"
                        type="url"
                        value={state.url}
                        onChange={handleChange}
                    />
                </div>

                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", width: "70%", gap: "5px", margin: "10px auto" }}>
                    <label>Select the Correct Answer</label>
                    <select
                        style={{ textTransform: "capitalize", height: "40px" }}
                        name="textArea"
                        value={state.textArea}
                        onChange={handleChange}
                    >
                        <option value="">Select...</option>
                        <option value="ali">Ali</option>
                        <option value="ahmed">Ahmed</option>
                        <option value="mohaned">Mohaned</option>
                    </select>
                </div>

                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", width: "70%", gap: "5px", margin: "10px auto" }}>
                    <label>Add a Comment</label>
                    <textarea
                        placeholder="About yourself"
                        style={{ padding: "20px", textTransform: "capitalize" }}
                        name="textArea"
                        value={state.textArea}
                        onChange={handleChange}
                    />
                </div>

                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", width: "70%", gap: "5px", margin: "10px auto" }}>
                    <label>Submit or Reset</label>
                    <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", gap: "20px" }}>
                        <button style={buttonStyling} type="reset" onClick={handleReset}>Reset</button>
                        <button style={buttonStyling} type="submit" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </form>
        </>
    );
}
