import React from 'react';

const Pagination = ({ count, index, setIndex, limit }) => {
    const pages = Math.ceil(count / limit);
    const pagination = [...Array(pages).keys()];

    if (pages <= 1) {
        return
    }

    return (
        <div className="relative flex justify-center space-x-1">
            <button
                onClick={() => index > 0 && setIndex(index - 1)}
                title="previous"
                className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md"
            >
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>
            {/* pagination number buttons */}
            {
                pagination.map(page =>
                    <button
                        onClick={() => setIndex(page)}
                        key={page}
                        className={`inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md ${page === index ? "bg-blue-500 text-white" : ""}`}
                    >
                        {page + 1}
                    </button>
                )
            }
            <button
                onClick={() => index < pages - 1 && setIndex(index + 1)}
                title="next"
                className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md"
            >
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>
        </div>
    );
};

export default Pagination;