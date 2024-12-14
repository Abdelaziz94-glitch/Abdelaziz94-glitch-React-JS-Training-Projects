// this is the first solution using only the useState and the code was written in more than 107 line 


import {useState} from 'react';

export default function InputForm(){
    // styling
    const checkBoxStyling = {accentColor:"pink",border:"1px solid transparent",borderRadius:"50%"}
    const buttonStyling ={width:"120px",height:"40px",backgroundColor:"green",color:"white",border:"1px solid transparent",borderRadius:"5px",textTransform:"capitalize",fontSize:"16px"}
   
    // useState hook construction
    const initValue = [
            {id:1,firstName:""},
            {id:2,lastName:""},
            {id:3,email:""},
            {id:4,contact:null},
            {id:5,option1:false},
            {id:6,option2:false},
            {id:7,option3:false},
            {id:8,option4:false},
            {id:9,option5:false},
            {id:10,option6:false},
            {id:11,file:null},
            {id:12,url:""},
            {id:13,option7:false},
            {id:14,option8:false},
            {id:15,option9:false},
            {id:16,textArea:""}]
    const [value,setValue]=useState(initValue)

    const changeHandler1 = (e)=>{
        setValue({...value, firstName:e.target.value})
    }

    const changeHandler2 = (e)=>{
        setValue({...value, lastName:e.target.value})
    }

    const changeHandler5 = (e)=>{
        setValue({...value, option5:e.target.checked})
    }

    const handleReset =()=>{
        setValue({value}) 
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(value)
    }

    return (
        <>
        <form className="formStyling">
            <div style={{display:"flex",justifyContent:"center",flexDirection:"column",width:"70%",gap:"5px"}}>
                <label>first name</label>
                <input className='firstCon' placeholder="insert your first name" value={value.firstName} onChange={changeHandler1}/>

                <label>last name</label>
                <input className='firstCon' type="text" placeholder="insert your last name" value={value.lastName} onChange={changeHandler2}/>
                
                <label>insert your email</label>
                <input className='firstCon' type="email" placeholder="insert your email" value={value.email}/>
                
                <label>contacts</label>
                <input className='firstCon' type="number" placeholder="insert your contact" value={value.contact}/>
            </div>

            <div style={{display:"flex",justifyContent:"center",flexDirection:"row",gap:"20px", margin:"20px auto"}}>
                <label>gender ||</label>
                <input style={checkBoxStyling} type="checkbox" id="one" value={value.option1} onChange={changeHandler5}/> <label for="one">male</label>
                <input style={checkBoxStyling} type="checkbox" id="two"/> <label for="two">female</label>
                <input style={checkBoxStyling} type="checkbox" id="three"/> <label for="three">other</label>
            </div>

            <div style={{display:"flex",justifyContent:"center",flexDirection:"row",gap:"20px", margin:"20px auto"}}>
            <label>your best subject ||</label>
                <input style={checkBoxStyling} type="checkbox" id="onee" /> <label for="onee">math</label>
                <input style={checkBoxStyling} type="checkbox" id="twoo"/> <label for="twoo">physics</label>
                <input style={checkBoxStyling} type="checkbox" id="threee"/> <label for="threee">other</label>
            </div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row",gap:"20px", padding:"auto 20px"}}>
                <label>upload your resumee ||</label>
                <input type="file" />
            </div>
            
            <div style={{display:"flex",justifyContent:"center",flexDirection:"column",width:"70%",gap:"5px", margin:"20px auto"}}>
                <label>insert the link</label>
                <input className='firstCon' type="URL" />
            </div>
          
            <div style={{display:"flex",justifyContent:"center",flexDirection:"column",width:"70%",gap:"5px", margin:"10px auto"}}>
                <label>select the correct answer</label>
                <select style={{textTransform:"capitalize", height:"40px"}}>
                    <option>ali</option>
                    <option>ahmed</option>
                    <option>mohaned</option>
                </select>
            </div>

            <div style={{display:"flex",justifyContent:"center",flexDirection:"column",width:"70%",gap:"5px", margin:"10px auto"}}>
                <label>add a comment</label>
                <textArea placeholder="about yourself" style={{padding:"20px",textTransform:"capitalize"}}/>
            </div>

            <div style={{display:"flex",justifyContent:"center",flexDirection:"column",width:"70%",gap:"5px", margin:"10px auto"}}>
                <label>submit or reset</label>
                <div style={{display:"flex",justifyContent:"space-between",flexDirection:"row",gap:"20px"}}>
                    <button style={buttonStyling} onClick={handleReset}>reset</button>
                    <button style={buttonStyling} onClick={handleSubmit}>submit</button>
                </div>
            </div>
        </form>
        </>
    )
}