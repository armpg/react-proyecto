import React, { useState } from 'react';

const RegisterProduct = ({ onProductRegistered }) => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost/products/api.php/productos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(product)
            });
            const data = await response.json();
            if (response.ok) {
                alert('Producto registrado con éxito');
                onProductRegistered(data);
                setProduct({ name: '', description: '', price: '' }); // Limpiar formulario
            } else {
                alert(`Error: ${data.error}`);
            }
        } catch (error) {
            alert(`Error al registrar el producto: ${error.message}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-2 border rounded bg-slate-900 shadow-lg">
            <div className="mb-4">
            <label className="block text-gray-200 font-bold mb-4 text-xl">Registrar nuevo producto</label>
                <label className="block text-gray-200 font-bold mb-2">Nombre del producto:</label>
                <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    className="w-7/12 px-3 py-2 border rounded bg-gray-700 text-white"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-200 font-bold mb-2">Descripción:</label>
                <textarea
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                    className="w-8/12 px-3 py-2 border rounded bg-gray-700 text-white"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-200 font-bold mb-2">Precio:</label>
                <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    className="w-6/12 px-3 py-2 border rounded bg-gray-700 text-white"
                    required
                />
            </div>
            <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-3/12"
            >
                Registrar Producto
            </button>
        </form>
    );
};

export default RegisterProduct;
