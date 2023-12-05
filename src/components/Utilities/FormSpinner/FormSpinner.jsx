function FormSpinner({displayStyle}) {
    return (
      <div className="form-loader-container" style={{display:`${displayStyle}`}}>
        <span class="loader">L &nbsp; ading</span>
      </div>
    );
  };
  export default FormSpinner;