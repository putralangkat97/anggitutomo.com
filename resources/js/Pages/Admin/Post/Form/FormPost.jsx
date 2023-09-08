import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import MDEditor from '@uiw/react-md-editor';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import slugify from 'react-slugify';

const FormPost = () => {
  const { data, setData, post, processing, errors, reset } = useForm({
    title: '',
    slug: '',
    content: '',
    tag: [],
  });
  const [value, setValue] = useState();

//   const listenPost = (e) => {
//     // console.log();
//     setData({
//       title: e.target.value,
//       slug: slugify(e.target.value),
//     });
//   };

  const submit = (e) => {
    e.preventDefault();
    post(route('admin.post.store'), {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  };

  useEffect(() => {
    setData('content', value);
  }, [value]);

  useEffect(() => {
    setData('slug', slugify(data.title));
  }, [data.title]);

  const tags = [
    { value: 'laravel', label: 'Laravel' },
    { value: 'livewire', label: 'Livewire' },
    { value: 'php', label: 'PHP' },
    { value: 'vue', label: 'VueJS' },
    { value: 'react', label: 'ReactJS' },
    { value: 'inertia', label: 'InertiaJS' },
  ];

  return (
    <form onSubmit={submit}>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <InputLabel htmlFor="title" value="Post Titile" />

          <TextInput
            id="title"
            type="text"
            name="title"
            value={data.title}
            className="mt-1 block w-full"
            onChange={(e) => setData('title', e.target.value)}
          />

          <InputError message={errors.title} className="mt-2" />
        </div>

        <div>
          <InputLabel htmlFor="slug" value="Slug" />

          <TextInput
            id="slug"
            type="text"
            name="slug"
            value={data.slug}
            className="mt-1 block w-full bg-gray-100 cursor-not-allowed"
            readOnly
          />

          <InputError message={errors.slug} className="mt-2" />
        </div>

        <div>
          <InputLabel htmlFor="title" value="Content" />

          <div data-color-mode="light">
            <MDEditor
              height={190}
              value={value}
              onChange={(val) => setValue(val)}
            />
          </div>

          <InputError message={errors.content} className="mt-2" />
        </div>

        <div>
          <InputLabel htmlFor="tag" value="Post Titile" />

          <Select
            isMulti
            id="tag"
            options={tags}
            onChange={(e) => setData('tag', e)}
          />
          <input type="hidden" name="tag[]" value={data.tag} />

          <InputError message={errors.tag} className="mt-2" />
        </div>
      </div>

      <PrimaryButton className="mt-10" disabled={processing}>
        Submit
      </PrimaryButton>
    </form>
  );
};

export default FormPost;
