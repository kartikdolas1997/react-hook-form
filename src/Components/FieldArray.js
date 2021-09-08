import React, { Fragment } from "react";
import { useForm, useFieldArray } from "react-hook-form";
function FieldArray() {
  const { register, handleSubmit, control } = useForm();
  const UserInformation = (prop) => {
    const { register, control } = prop;
    const { append, fields, remove } = useFieldArray({
      control,
      name: "users",
    });
    return (
      <div className="card-mb-4">
        <div className="card-header">User Information</div>
        <div className="card-body">
          {fields.map((item, index) => (
            <div className="form-row form-group" key={item.id}>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                //   ref={register()}
                {...register(`users.${index}.firstName`)} 
                //   name={`users[${index}].firstName`}
                  placeholder="Enter Your First name"
                  defaultValue={item.firstName}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                //   ref={register()}
                {...register(`users.${index}.lastName`)} 

                //   name={`users[${index}].lastName`}
                  defaultValue={item.lastName}
                  placeholder="Enter Your Last name"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                //   ref={register()}
                {...register(`users.${index}.emailAddress`)} 

                //   name={`users[${index}].emailAddress`}
                  defaultValue={item.emailAddress}
                  placeholder="Enter Your E-mail Address"
                />
              </div>
              <div className="col">
                <select
                  className="form-control"
                  id="state"
                //   ref={register()}
                {...register(`users.${index}.state`)} 

                //   name={`users[${index}].state`}
                  defaultValue={item.state}
                >
                  <option key="" value="">
                    Select Your State
                  </option>
                  <option key="Jharkhand" value="Jharkhand">
                    Jharkhand
                  </option>
                  <option key="Bihar" value="Bihar">
                    Bihar
                  </option>
                  <option key="Assam" value="Assam">
                    Assam
                  </option>
                  <option key="Goa" value="Goa">
                    Goa
                  </option>
                  <option key="Manipur" value="Manipur">
                    Manipur
                  </option>
                </select>
              </div>
            <div className="col">
                <button className="btn btn-danger" onClick={()=> remove(index)}>Del.</button>
            </div>
            </div>
          ))}
          <button
            className="btn btn-primary"
            onClick={() =>
              append({
                firstName: "",
                lastName: "",
                emailAddress: "",
                state: "",
              })
            }
          >
            Add User
          </button>
        </div>
      </div>
    );
  };

  const basicform = (
    <div className="card-mb-4">
      <div className="card-header">Basic Information</div>

      <div className="card-body">
        <div>
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullname"
              name="fullname"
              {...register("fullname")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              {...register("email")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              {...register("phone")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              {...register("password")}
            />
          </div>
          
        </div>
        
      </div>
    </div>
  );

  const onSubmit = (data) => {
    console.log("hjhhhh");
    console.log(data);
  };

  return (
    <div className="App">
      <div className="container py-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          {basicform}
          <UserInformation register={register} control={control} />
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FieldArray;
