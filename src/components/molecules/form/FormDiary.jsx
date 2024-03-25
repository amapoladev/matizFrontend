import React, { useState, useEffect } from 'react';


const FormDiary = () => {

    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined);
            return;
        }

        const objectUrl = URL.createObjectURL(selectedFile);
        setPreview(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile]);

    const onSelectFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined);
            return;
        }

        setSelectedFile(e.target.files[0]);
    };

    const [formData, setFormData] = useState({
        user_id: '',
        emotion_id: '',
        feelingsnotes: '',
        intensity_id: '',
        date: '',
    });

    const handleChange = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value,
        }));
    };

    const handlefeelingsnotesChange = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            feelingsnotes: e.target.value,
        }));
    };

    const handleintensityChange = (e) => {
        const selectedIntensities = Array.from(e.target.selectedOptions, (option) => option.value);
        setFormData((prevFormData) => ({
            ...prevFormData,
            intensities_ids: selectedIntensities,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append('user_id', formData.user_id);
        form.append('emotion_id', formData.emotion_id);
        form.append('intensity_id', formData.intensity_id);
        form.append('feelingsnotes', formData.feelingsnotes);
        form.append('date', formData.date);

        try {
            const response = await fetch('http://127.0.0.1:8000/api/journals', {
                method: 'POST',
                body: form,
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                console.error(`HTTP error! status: ${response.status}, message: ${errorMessage}`);
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data); // Manejar la respuesta de la API según sea necesario
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    };

    return (
        <div>


            <form
                className="bg-beige-bg rounded-lg px-8 py-8 max-w-md mx-auto"
                action="http://127.0.0.1:8000/api/journals"
                method="POST"
                encType="multipart/form-data"
                onSubmit={handleSubmit}>

                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="user_id"
                        id="user_id"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-granate-dark focus:outline-none focus:ring-0 focus:border-granate-dark peer"
                        placeholder=" "
                        required
                        onChange={handleChange} // Manejar cambios en el campo de nombre
                    />
                    <label
                        htmlFor="user_id"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-brown-letter peer-focus:dark:text-brown-letter peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        user_id
                    </label>
                </div>


                <div class="relative z-0 w-full mb-5 group">
                    <textarea
                        type="textarea"
                        name="feelingsnotes"
                        id="feelingsnotes"
                        maxLength="250"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-granate-dark focus:outline-none focus:ring-0 focus:border-granate-dark peer"
                        placeholder=" "
                        required
                        onChange={handlefeelingsnotesChange} // Manejar cambios en el campo de descripción
                    />
                    <label
                        for="feelingsnotes"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-brown-letter peer-focus:dark:text-brown-letter peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Como te sientes hoy? Escríbe si lo necesitas
                    </label>
                </div>

                <div class="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <select
                            name="intensity_id"
                            id="intensity_id"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-granate-dark focus:outline-none focus:ring-0 focus:border-granate-dark peer"
                            required
                            onChange={handleChange}
                        >
                            <option value="" disabled selected>
                                Selecciona una opción
                            </option>
                            <option value="1">Alta</option>
                            <option value="2">Media</option>
                            <option value="3">Baja</option>
                        </select>

                        <label
                            htmlFor="emotion_id"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-brown-letter peer-focus:dark:text-brown-letter peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Categoría
                        </label>
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <select
                            name="emotion_id"
                            id="emotion_id"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-granate-dark focus:outline-none focus:ring-0 focus:border-granate-dark peer"
                            required
                            onChange={handleEmotionChange}
                            multiple  // Permitir selección múltiple
                        >
                            <option value="1">Alegría</option>
                            <option value="2">Amor</option>
                            <option value="3">Enojo</option>
                            <option value="4">Miedo</option>
                            <option value="5">Tristeza</option>
                            <option value="6">Calma</option>
                            <option value="6">Aburrimiento</option>
                        </select>
                        <label
                            htmlFor="intolerances"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-brown-letter peer-focus:dark:text-brown-letter peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Intolerancias
                        </label>
                        <label
                            htmlFor="intolerance_id"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-brown-letter peer-focus:dark:text-brown-letter peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Intolerancias
                        </label>
                    </div>

                </div>

                <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="number" name="price" id="price" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-granate-dark focus:outline-none focus:ring-0 focus:border-granate-dark peer" placeholder=" " required />
                        <label for="price" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-brown-letter peer-focus:dark:text-brown-letter peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Precio</label>
                    </div>

                </div>

                <button
                    type="submit"
                    className="text-white bg-granate-light hover:bg-granate-dark focus:ring-4 focus:outline-none focus:ring-granate-light font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-granate-light dark:hover:bg-granate-dark dark:focus:ring-granate-light"
                >
                    Guardar
                </button>
            </form>


        </div>
   
   
   </>
  );
}

export default FormDiary;


