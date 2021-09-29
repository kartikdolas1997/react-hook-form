import React from "react";
import "../styles/App.scss";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import arr from "../../src/data"


let finalCities = [];



function Validations() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const getCity = (evt) => {
    console.log(evt.target.value);


    arr.forEach(x => {
      if (x.state == evt.target.value) {
        console.log(x.cities);
        finalCities = x.cities
      }
    })

  }




  return (
    <div>
      <div className="App">
        <div className="container py-5">
          <div className="card border-0 shadow  p-4 w-50 mx-auto">
            <h1>Validated Form</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  className={classNames("form-control", {
                    "is-invalid": errors.fullname,
                  })}
                  {...register("fullname", {
                    required: "It is mandatory.",
                    minLength: { value: 3, message: "Minimum 3 characters." },
                  })}
                />
                {errors.fullname && (
                  <div className="invalid-feedback">
                    {errors.fullname.message}
                  </div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className={classNames("form-control", {
                    "is-invalid": errors.email,
                  })}
                  id="email"
                  name="email"
                  {...register("email", {
                    required: "It is mandatory.",
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Please enter a valid email.",
                    },
                  })}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email.message}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  className={classNames("form-control", {
                    "is-invalid": errors.phone,
                  })}
                  id="phone"
                  name="phone"
                  {...register("phone", {
                    required: "It is mandatory.",
                    pattern: {
                      value: /(7|8|9)\d{9}/,
                      message: "Please enter a valid phone number.",
                    },
                  })}
                />
                {errors.phone && (
                  <div className="invalid-feedback">{errors.phone.message}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className={classNames("form-control", {
                    "is-invalid": errors.password,
                  })}
                  id="password"
                  name="password"
                  {...register("password", {
                    required: "It is mandatory.",
                    pattern: {
                      value: /(7|8|9)\d{9}/,
                      message: "Please enter a valid email.",
                    },
                  })}
                />
                {errors.password && (
                  <div className="invalid-feedback">
                    {errors.password.message}
                  </div>
                )}
              </div>
              <div className="form-group">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="male"
                    value="male"
                    {...register("gender")}
                    name="gender"
                  />
                  <label className="form-check-label" htmlFor="male">
                    male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="female"
                    value="female"
                    {...register("gender")}
                    name="gender"
                  />
                  <label className="form-check-label" htmlFor="female">
                    female
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="other"
                    value="other"
                    {...register("gender")}
                    name="gender"
                  />
                  <label className="form-check-label" htmlFor="other">
                    other
                  </label>
                </div>
              </div>
              <div className="form-group">
                <select className="custom-select" name="state" {...register("address.state")} onSelect={getCity}>
                  {arr.map((e, key) => {
                    return <option key={key} value={e.value}>{e.state}</option>;
                  })}
                </select>
              </div>

              {/* finalCities */}
              <div className="form-group">
                <label htmlFor="City">City</label>
                <select  value={finalCities} className="custom-select" name="address.city" {...register("address.city")}>
                  {finalCities.map((e) => {
                    return <option key={e} value={e}>{e}</option>;
                  })}
                  {/* {finalCities} */}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="Zip">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  name="address.zip"
                  {...register("address.zip")}
                />
              </div>

              <div className="form-group">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="terms"
                    value="agree"
                    {...register("terms_and_conditions")}
                    name="terms_and_conditions"
                  />
                  <label className="form-check-label" htmlFor="terms">
                    I agree all terms and conditons
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="updates"
                    {...register("send_me_updates")}
                    name="send_me_updates"
                  />
                  <label className="form-check-label" htmlFor="updates">
                    send me latest Bootstrap updates
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit Form
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Validations;
