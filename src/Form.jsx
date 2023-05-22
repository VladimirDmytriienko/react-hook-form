import { useForm } from "react-hook-form";

export default function Form() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => alert(JSON.stringify(data));
    
    const handleKeyPress = (event) => {
      const keyCode = event.keyCode || event.which;
      const keyValue = String.fromCharCode(keyCode);
      const pattern = /[0-9]/;
  
      if (!pattern.test(keyValue)) {
        event.preventDefault();
      }
    };
    
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First name</label>
        <input
          type="text"
          {...register("firstName", { required: true, maxLength: 100 })}
          aria-invalid={errors.firstName ? "true" : "false"}
        />
        {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}
        
        <label>Last name</label>
        <input
          type="text"
          {...register("lastName", { required: true, maxLength: 100 })}
          aria-invalid={errors.lastName ? "true" : "false"}
        />
        {errors.lastName?.type === 'required' && <p role="alert">Last name is required</p>}
        
        <label>Email</label>
        <input
          type="text"
          {...register("email", {
            required: true,
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Invalid email address'
            }
          })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email?.type === 'required' && <p role="alert">Email is required</p>}
        {errors.email?.type === 'pattern' && <p role="alert">{errors.email.message}</p>}
        
        <label>Mobile number</label>
        <input
          type="text"
          {...register("mobileNumber", { required: true })}
          aria-invalid={errors.mobileNumber ? "true" : "false"}
          onKeyPress={handleKeyPress}
        />
        {errors.mobileNumber?.type === 'required' && <p role="alert">Mobile number is required</p>}
        
        <input type="submit" />
      </form>
    );
}
  