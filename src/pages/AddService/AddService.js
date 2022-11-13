import toast from 'react-hot-toast';
import useDocumentTitle from '../../utilities/useDocumentTitle';

const AddService = () => {
    useDocumentTitle("Add Service");

    const handleCreateService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const description = form.description.value;

        const newServiceInfo = {
            title,
            img,
            description,
            rating: 0
        }

        //call post api for service
        fetch('http://localhost:5000/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newServiceInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('New Service is Created');
                    form.reset();
                }
            });

    }


    return (
        <div className="hero py-10">
            <div className="hero-content flex-col lg:flex-row w-full">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 py-10">
                    <h1 className="text-4xl font-semibold text-center">Create A New Service</h1>

                    <form onSubmit={handleCreateService} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Service Title</span>
                            </label>
                            <input name='title' type="text" placeholder="Service Title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Service Image</span>
                            </label>
                            <input name='img' type="text" placeholder="Image url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Service Description</span>
                            </label>
                            <textarea rows="3" name='description' placeholder="Description..." className="border-2 p-4 rounded-md resize-none" required></textarea>
                        </div>

                        {/* rating */}
                        {/* <div className="form-control">
                            <div className="flex  items-center py-6">
                                <span className="font-semibold text-center">Rating: </span>
                                <div className="flex space-x-3 text-xl ml-5 md:text-3xl">
                                    {
                                        [...Array(5).keys()].map(btn =>
                                            <button
                                                key={btn}
                                                type="button"
                                                onClick={() => setRating(btn + 1)}
                                                className={rating > btn ? 'text-amber-400' : ''}
                                            >
                                                <FaStar />
                                            </button>)
                                    }
                                </div>
                            </div>
                        </div> */}

                        <div className="form-control mt-6">
                            <button className="btn bg-amber-500 border-0 capitalize w-fit mx-auto">Create Service</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddService;