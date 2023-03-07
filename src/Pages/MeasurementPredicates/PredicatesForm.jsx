import { useForm } from "react-hook-form";

export function PredicatesForm() {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <form className="measurement-predicates-form" onSubmit={handleSubmit}>
        <label className="number-label" htmlFor="Element">
          ID Element
        </label>
        <input
          className="number-input"
          type="number"
          placeholder="....."
          maxLength="5"
          {...register("IdElement")}
        />
        <label className="number-label" htmlFor="X">
          Number of X's
        </label>
        <input
          className="number-input"
          type="number"
          name="X"
          id="X"
          placeholder="....."
          {...register("numberOfX")}
        />
        <label className="number-label" htmlFor="Y">
          Number of Y's
        </label>
        <input
          className="number-input"
          type="number"
          name="Y"
          id="Y"
          placeholder="....."
          {...register("numberOfY")}
        />
        <label className="number-label" htmlFor="Z">
          Number of Z's
        </label>
        <input
          className="number-input"
          type="number"
          name="Z"
          id="Z"
          placeholder="....."
          {...register("numberOfZ")}
        />
        <label className="attributeX" htmlFor="">
          Attribute of X's
        </label>
        <input
          className="input-attributeX"
          type="text"
          name="attributeX"
          id="attributeX"
          {...register("attributeOfX")}
        />
        <label className="attributeY" htmlFor="">
          Attribute of Y's
        </label>
        <input
          className="input-attributeY"
          type="text"
          name="attributeY"
          id="attributeY"
          {...register("attributeOfY")}
        />
        <label className="attributeZ" htmlFor="">
          Attribute of Z's
        </label>
        <input
          className="input-attributeZ"
          type="text"
          name="attributeZ"
          id="attributeZ"
          {...register("attributeOfZ")}
        />
      </form>
    </div>
  );
}
