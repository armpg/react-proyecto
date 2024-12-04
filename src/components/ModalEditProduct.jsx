import React, { useState } from 'react';

const ModalEditProduct = ({ product, onClose, onProductUpdated }) => {
    const [editedProduct, setEditedProduct] = useState({ ...product });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct({
            ...editedProduct,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Enviando producto actualizado:", editedProduct); // Verificar datos antes de enviarlos

            const response = await fetch(`http://localhost/products/api.php/productos/${product.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editedProduct)
            });

            const data = await response.json();
            if (response.ok) {
                alert('Producto actualizado con éxito');
                console.log("Producto actualizado:", data); // Verificar la respuesta del servidor
                onProductUpdated(data); // Actualiza el catálogo con los datos del producto actualizado
                onClose(); // Cerrar el modal
            } else {
                alert(`Error: ${data.error || 'No se pudo actualizar el producto.'}`);
            }
        } catch (error) {
            alert(`Error al actualizar el producto: ${error.message}`);
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-slate-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-xl font-bold mb-4 text-white">Editar Producto</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-white font-bold mb-2">Nombre:</label>
                        <input
                            type="text"
                            name="nombre" // Cambiado a 'nombre'
                            value={editedProduct.nombre} // Cambiado a 'nombre'
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white font-bold mb-2">Descripción:</label>
                        <textarea
                            name="descripcion" // Cambiado a 'descripcion'
                            value={editedProduct.descripcion} // Cambiado a 'descripcion'
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white font-bold mb-2">Precio:</label>
                        <input
                            type="number"
                            name="precio" // Cambiado a 'precio'
                            value={editedProduct.precio} // Cambiado a 'precio'
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="mr-4 bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Guardar Cambios
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalEditProduct;
