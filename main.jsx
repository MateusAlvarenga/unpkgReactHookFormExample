const { useState } = React
const {useForm} = ReactHookForm

const App = (props) => { 
 
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    alert('onSubmit event called !! \n data:' + JSON.stringify(data)); 
  };


  console.log("validation errors: ", errors);
  
  return (
    <div class="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-group">
          <input type="text" placeholder="First name" {...register("username", {required: true, maxLength: 80})} />
          {errors.username && <span>username is required</span>}
        </div>
        <div class="form-group">
          <input type="email" placeholder="email" {...register("email", {required: true, maxLength: 200})} />
          {errors.email && <span>email is required</span>}
        </div>
        <div class="form-group">  
          <input type="password" placeholder="password" {...register("password", {required: true})} />
          {errors.password && <span>password is required</span>}
        </div>

        <div class="form-group">  
          <input type="submit" />
        </div>      
      </form>
    </div>
  );
}

const rootElement = document.getElementById('app')
ReactDOM.render(<App />, rootElement)