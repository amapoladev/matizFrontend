import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const Form = () => {
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
        emotion: '',
        image: null,
    });

    const handleChange = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append('emotion', formData.emotion);
        form.append('image', formData.image);

        try {
            const response = await fetch('http://127.0.0.1:8000/api/emotions', {
                method: 'POST',
                body: form,
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                console.error(`HTTP error! status: ${response.status}, message: ${errorMessage}`);
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
            toast.success('¡La emoción se guardó exitosamente!', { autoClose: 3000 });
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            toast.error('¡Hubo un problema al guardar tu emoción!', { autoClose: 3000 });
        }
    };

    return (
        <div className="max-w-md mx-auto bg-blueLight clear text-blue">
            <form
                className="bg-blue-200 rounded-lg px-8 py-8 space-y-6"
                action="http://127.0.0.1:8000/api/emotions"
                method="POST"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
            >
                <div>
                    <label htmlFor="emotion" className="block text-sm font-bold text-blue pb-2">
                        ¿Cuál emoción quieres agregar?
                    </label>
                    <input
                        type="text"
                        name="emotion"
                        id="emotion"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        placeholder="  Emoción"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="image" className="block text-sm font-bold text-blue pb-2">
                        Sube la imagen de la emoción
                    </label>
                    <input
                        onChange={(e) => {
                            onSelectFile(e);
                            handleFileChange(e);
                        }}
                        type="file"
                        name="image"
                        id="image"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        required
                    />
                    {selectedFile && (
                        <div className="mt-2">
                            <img src={preview} alt="Preview" className="w-32 h-32 object-cover" />
                        </div>
                    )}
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Guardar
                    </button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Form;

