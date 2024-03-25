import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormJournal = () => {
    const [formData, setFormData] = useState({
        user_id: "",
        emotion_id: "",
        feelingsnotes: "",
        intensity_id: "", // Cambiar a intensity_id
        journal_date: new Date().toISOString().split("T")[0],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    
    const handleEmotionChange = (emotionId) => {
        setFormData({
            ...formData,
            emotion_id: emotionId,
        });
    };

    const handleDateChange = (date) => {
        setFormData({
            ...formData,
            journal_date: date.toISOString().split("T")[0],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://127.0.0.1:8000/api/journals", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                console.error(
                    `HTTP error! status: ${response.status}, message: ${errorMessage}`
                );
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            toast.success('¡Entrada de diario guardada correctamente!');
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            toast.error('Error al guardar la entrada del diario. Por favor, inténtelo de nuevo.');
        }
    };
    return (
        <div>
            <ToastContainer />
            <form
                className="bg-blueLight rounded-lg px-8 py-8 max-w-md mx-auto flex flex-col"
                onSubmit={handleSubmit}
            >
                {/* Campo de user_id */}
                <input
                    type="text"
                    name="user_id"
                    className="w-full rounded text-blue"
                    value={formData.user_id}
                    onChange={handleChange}
                    placeholder="User ID"
                />

                {/* Campo de emotion_id */}
                <select
                    name="emotion_id"
                    className="w-full rounded text-blue"
                    value={formData.emotion_id}
                    onChange={handleChange}
                    required
                >
                    <option value="">Selecciona una emoción</option>
                    <option value="1">Alegría</option>
                    <option value="2">Amor</option>
                    <option value="3">Enojo</option>
                    <option value="4">Miedo</option>
                    <option value="5">Tristeza</option>
                    <option value="6">Calma</option>
                    <option value="7">Aburrimiento</option>
                </select>

                {/* Campo de feelingsnotes */}
                <textarea
                    name="feelingsnotes"
                    className="w-full rounded text-blue"
                    value={formData.feelingsnotes}
                    onChange={handleChange}
                    placeholder="¿Cómo te has sentido hoy?"
                ></textarea>

                {/* Campo de intensity_id */}
                <select
                    name="intensity_id"
                    className="w-full rounded text-blue"
                    value={formData.intensity_id}
                    onChange={handleChange}
                    required
                >
                    <option value="">Selecciona una intensidad</option>
                    <option value="1">Alta</option>
                    <option value="2">Media</option>
                    <option value="3">Baja</option>
                </select>

                {/* Campo de journal_date */}
                <input
                    type="date"
                    name="journal_date"
                    className="w-full rounded text-blue"
                    value={formData.journal_date}
                    onChange={handleChange}
                />

                <button type="submit" className="bg-blue hover:bg-indigo-800 text-white w-full p-2 rounded uppercase font-bold cursor-pointer">
                    Guardar
                </button>
            </form>
        </div>
    );
};

export default FormJournal;
