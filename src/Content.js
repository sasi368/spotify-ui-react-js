import React from "react";

function Content(props) {
    const handleClick = () => {
     alert(props.name);
    };

  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" name="name"/>
        </label>
        <label>
          Password:
          <input type="text" name="name"/>
        </label>
        <input type="submit" value="Submit" onClick={handleClick}/>
       
      </form>
      
    </div>
  );

}

export default Content;
