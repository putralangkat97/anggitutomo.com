import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";

const FormTag = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
      name: '',
    });

    const submit = (e) => {
      e.preventDefault();
      post(route('admin.tag.store'), {
        preserveScroll: true,
        onSuccess: () => reset(),
      });
    };

    return (
      <form onSubmit={submit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="">
            <InputLabel htmlFor="name" value="Tag Name" />

            <TextInput
              id="name"
              type="text"
              name="name"
              value={data.name}
              className="mt-1 block w-full"
              placeholder="name"
              onChange={(e) => setData('name', e.target.value)}
            />

            <InputError message={errors.name} className="mt-2" />
          </div>
        </div>

        <PrimaryButton className="mt-10" disabled={processing}>
          Submit
        </PrimaryButton>
      </form>
    );
}

export default FormTag;
