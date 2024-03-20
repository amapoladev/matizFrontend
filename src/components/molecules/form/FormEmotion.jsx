import React, { useState, useEffect } from 'react';

const FormEmotion = () => {
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

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

            // Abre el modal cuando la emoción se guarda con éxito
            setIsModalOpen(true);
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    };

    return (
        <div className="rounded-xl max-w-md mx-auto bg-blueLight clear text-blue">
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
                    <button type="submit" className="btn">Guardar</button>
                </div>
            </form>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-gray-500 opacity-50"></div>
                    <div className="bg-white rounded-lg p-8">
                        <h2 className="text-lg font-bold mb-4">¡Emoción guardada con éxito!</h2>
                        <button className="btn" onClick={() => setIsModalOpen(false)}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FormEmotion;
