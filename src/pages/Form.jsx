import React from "react";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application successful");
  };
  return (
    <form onClick={handleSubmit} className="flex flex-col gap-3">
      <h1 className="font-bold text-xl italic">
        Provide your cv and your certificate
      </h1>
      <input required type="file" placeholder="submit cv" />
      <input required type="file" placeholder="submit certificate" />
      <button className="px-4 py-2  bg-green-400 w-44">Submit</button>
    </form>
  );
};

export default Form;
