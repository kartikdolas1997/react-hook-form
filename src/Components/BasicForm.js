import React from 'react'
import "../styles/App.scss"
import {useForm} from 'react-hook-form'

function BasicForm() {

    const {register, handleSubmit} = useForm();

    const onSubmit = data => {
      console.log(data);
    }
    return (
        
            <div className="App">
              <div className="container py-5">
                <div className="card border-0 shadow  p-4 w-50 mx-auto">
                <h1>Basic Form</h1>

                  <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" className="form-control" id="fullname" name="fullname" {...register("fullname")}/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" name="email" {...register("email")} />
          </div>
           <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" className="form-control" id="phone" name="phone" {...register("phone")} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" name  ="password" {...register("password")} />
          </div>
          <div className="form-group">
          <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" id="male" value="male" {...register("gender")} name="gender" />
          <label className="form-check-label" htmlFor="male">male</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" id="female" value="female" {...register("gender")} name="gender" />
          <label className="form-check-label" htmlFor="female">female</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" id="other" value="other" {...register("gender")} name="gender" />
          <label className="form-check-label" htmlFor="other">other</label>
        </div>
          </div>
          {/* <div className="form-group">
          <select className="custom-select" name="state" {...register("state")}>
          <option value="">Select your state</option>
          <option value="Delhi">Delhi</option>
          <option value="Punjab">Punjab</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Bihar">Bihar</option>
        </select>
          </div> */}
        
        <div className="form-group">
            <label htmlFor="state">State</label>
            <input type="text" className="form-control" id="state" name="address.state" {...register("address.state")} />
          </div>
        
          <div className="form-group">
            <label htmlFor="City">City</label>
            <input type="text" className="form-control" id="city" name="address.city" {...register("address.city")} />
          </div>
        
          <div className="form-group">
            <label htmlFor="Zip">Zip</label>
            <input type="text" className="form-control" id="zip" name="address.zip" {...register("address.zip")} />
          </div>
          
          <div className="form-group">
          <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id="terms" value="agree" {...register("terms_and_conditions")} name="terms_and_conditions"/>
          <label className="form-check-label" htmlFor="terms">I agree all terms and conditons</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id="updates" {...register("send_me_updates")} name="send_me_updates"/>
          <label className="form-check-label" htmlFor="updates">send me latest Bootstrap updates</label>
        </div>
          </div>
          <button type="submit" className="btn btn-primary">Submit Form</button>
                  </form>
                </div>
              </div>
            </div>
          
    )
}

export default BasicForm
