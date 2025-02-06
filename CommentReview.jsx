import React, { useRef, useState } from 'react';

export default function CommentReview() {
    const nam = useRef(null);
    const rate = useRef(null);
    const cmnt = useRef(null);
    const [review, setReview] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        const addReview = {
            name: nam.current.value,
            rating: parseInt(rate.current.value),
            cmnnt: cmnt.current.value
        };

        setReview([...review, addReview]);

        nam.current.value = '';
        rate.current.value = '0';
        cmnt.current.value = '';
    }

    return (
        <div className="container mt-3">
            <h1 className="text-center mb-4">Comment Review</h1>

            {/* Comment Form */}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input ref={nam} type="text" placeholder="Your Name" className="form-control" required />
                </div>

                <div className="mb-3">
                    <select ref={rate} className="form-select" required>
                        <option value="0">Select Rating</option>
                        <option value="1">1 Star</option>
                        <option value="2">2 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="5">5 Stars</option>
                    </select>
                </div>

                <div className="mb-3">
                    <textarea ref={cmnt} className="form-control" placeholder="Write your comment here" required></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>

            {/* Reviews Section */}
            <div className="mt-4">
                {review.length === 0 ? (
                    <p className="text-center">No reviews yet.</p>
                ) : (
                    review.map((add, i) => (
                        <div key={i} className="border p-3 mb-3">
                            <p><strong>{add.name}</strong></p>
                            <p>{'★'.repeat(add.rating)}{'☆'.repeat(5 - add.rating)}</p>
                            <p>{add.cmnnt}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
