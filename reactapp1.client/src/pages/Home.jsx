import { useState } from "react";

function Home() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phone: "",
        message: "",
        captcha: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        alert("Form submitted (frontend only)");
    }; 

    return (
        <>
        
            <main className="flex justify-center items-center w-full min-h-screen bg-gray-100">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4"
                >
                    <h2 className="text-xl font-semibold text-center">Contact Form</h2>

                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />

                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />

                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />

                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    ></textarea>

                    <input
                        type="text"
                        name="captcha"
                        placeholder="Enter Captcha Code"
                        value={formData.captcha}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </form>
            </main>
            );

        </>
    );
}

export default Home;
