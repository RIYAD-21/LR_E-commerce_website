import React from 'react';
import './productDetail.css';

export default function ReviewForm({ productId, onReviewSubmit }) {
    const [review, setReview] = React.useState({rating: 0,comment: ''});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReview(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onReviewSubmit(productId, review);
        setReview({ rating: 0, comment: '' });
    };

    return (
        <div className="review-form">
            <form onSubmit={handleSubmit}>
                <h3>Leave a Review</h3>
                <div className="form-group" id='rating'>
                    <label>Rating:</label>
                    <select name="rating" value={review.rating} onChange={handleChange} required>
                        <option value="0">Select Rating</option>
                        {[1, 2, 3, 4, 5].map(rating => (
                            <option key={rating} value={rating}>{rating}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group" id='comment'>
                    <label>Comment:</label>
                    <textarea name="comment" value={review.comment} onChange={handleChange} required />
                </div>
                <button type="submit">Submit Review</button>
            </form>
        </div>
    );
}