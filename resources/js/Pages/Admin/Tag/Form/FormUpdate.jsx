import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { useMemo } from 'react';

const FormUpdate = ({ dataTag, tags }) => {
  const { data, setData, patch, processing, errors, reset } = useForm({
    name: dataTag.name,
    is_active: dataTag.is_active,
  });

  const submit = (e) => {
    e.preventDefault();
    patch(route('admin.tag.update', dataTag.id), {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  };

  const handleSelected = (e) => {
    setData('is_active', parseInt(e.target.value));
  };

  const actives = useMemo(
    () => [
      {
        value: 0,
        label: 'Disabled',
      },
      {
        value: 1,
        label: 'Active',
      },
    ],
    []
  );

  return (
    <form onSubmit={submit}>
      <div className="grid grid-cols-1 grid-cols-2 gap-4">
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
        <div className="">
          <InputLabel htmlFor="is_active" value="Status" />

          <select
            name="is_active"
            id="is_active"
            className="mt-1 block w-full"
            onChange={handleSelected}
            defaultValue={data.is_active}
          >
            {actives.map((item, key) => (
              <option key={key} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>

          <InputError message={errors.is_active} className="mt-2" />
        </div>
      </div>

      <PrimaryButton className="mt-10" disabled={processing}>
        Update
      </PrimaryButton>
    </form>
  );
};

export default FormUpdate;
