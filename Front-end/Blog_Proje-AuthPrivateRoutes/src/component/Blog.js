import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../Routs/Navbar'
import { Modal } from 'reactstrap'
import { ModalBody, ModalHeader } from 'react-bootstrap';

const Blog = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [data, setData] = useState();
    const [showAllPost, setShowAllPost] = useState();
    const [modal, setmodal] = useState(false);
    const [userId, setUserId] = useState('');

    let user = localStorage.getItem("userName")

    const handleBlogPost = () => {

        const BlogPost = { title: title, description: description, photo: image }
        // console.log("BlogPost", BlogPost);
        axios.post('http://localhost:3000/PostRoute/addOnePost', BlogPost)
            .then(responce => {
                setData(responce)
                // let myArr = [];
                // myArr.push(BlogPost)
                // setData(myArr);
                setData(responce.data.data.photo)
                console.log('BlogPostResponce', responce.data.data.title);
            })
        document.getElementById('inputBlog').reset();
    }


    useEffect(() => {
        axios.get('http://localhost:3000/PostRoute/fetchAllStory')
            .then(res => {
                if (res.status == 200) {
                    setShowAllPost(res.data.data)
                }
            }).catch(err => {
                console.log(err)
            })
    }, []);
    // console.log("showAllPost", showAllPost);

    // const elements = Array.isArray(showAllPost) && showAllPost?.map((ele) => {
    //     return (
    //         <div>
    //             <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    //                 {/*<img src={ele.photo} path className="img-fluid" />*/}
    //                 <img>{ele.photo}</img>

    //                 <a href="#!">
    //                     <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
    //                 </a>
    //             </div>
    //             <div className="card-body">
    //                 <h5 className="card-title">{ele.title}</h5>
    //                 <p className="card-text">{ele.description}</p>
    //                 <a href="#!" className="btn btn-primary">Read</a>&nbsp;
    //             <button className='btn btn-secondary' onClick={() => editPost(item.id)>Edit</button>&nbsp;
    //             <button className='btn btn-danger' onClick={''}>Delete</button>

    //             </div>
    //         </div>
    //     )
    // })
    // debugger
    const postUpdate = () => {
        // debugger
        console.log("fadfasdlfkjkldasf", userId)
        const putValue = { name: user, data:data }
        axios.put(`http://localhost:3000/CategoryRoute/update/${userId}`, putValue)
            .then(responce => {
                console.log(responce, 'responce')
            }).catch(err => {
                console.log(err)
            })
    }


    const handleUpdate = (e, _id, title, description, photo) => {
        // debugger
        console.log(_id, 'id');
        // console.log(title, '---title')
        // console.log(description, 'description');
        console.log(photo, '-----photo');
        setmodal(true);
        setTitle(title)
        setDescription(description)
        setUserId(_id)
        setImage(photo)
    }

    const postDelete = (_id) => {

        axios.delete(`http://localhost:3000/PostRoute/deleteStory`, {
            params: {
                id: _id
            }
        })
            .then((result) => {
                result.json().then((resp) => {
                    console.log(resp, 'resp')
                })
            }).catch((err) => {
                console.log(err)
            })
    }


    const imageHandle = () => {

    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <hr />
                <h4 ><strong>Add Blog</strong></h4>
                <hr />
            </div>
            <div className="container">
                <input type="file" className="form-control form-control-lg" id="photo" name="photo" accept="image/*" onChange={(e) => setImage(e.target.value)} /><br />
                <input type="text" className="form-control form-control-lg" placeholder="Post title" onChange={(e) => setTitle(e.target.value)} /><br />
                <textarea type="text" className="form-control form-control-lg" placeholder="Post Description" onChange={(e) => setDescription(e.target.value)} /><br />
                <button className="btn btn-dark btn-lg btn-block" id="inputBlog" type="button" onClick={handleBlogPost}>submit</button>
            </div>
            <main className="my-5">
                <div className="container-fluid" style={{ paddingLeft: "150px", paddingRight: "150px" }}>
                    <section className="text-center">
                        <h4 className="mb-5"><strong>Latest posts</strong></h4>
                        <div className="row">

                            {showAllPost && showAllPost.map((item, index) => {
                                return (
                                    <div className="col-lg-4 col-md-12 mb-4" key={index}>
                                        <div className="card">
                                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                                <img src={item.photo} path className="img-fluid" />
                                                <a href="#!">
                                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                                </a>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">{item.title}</h5>
                                                <p className="card-text">{item.description}</p>
                                                <button className='btn btn-primary' onClick={(e) => { handleUpdate(e, item._id, item.title, item.description, item.photo) }}>Update</button>&nbsp;
                                                 <button className='btn btn-danger' onClick={() => postDelete(item._id)}>Delete</button>
                                                 
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                </div>

            </main>


            <div>
                <Modal
                    className='mt-5'
                    size='lg'
                    isOpen={modal}
                    toggle={() => setmodal(!modal)}
                >
                    <ModalHeader toggle={() => setmodal(!modal)}>
                        <h3> Update Blog</h3>
                    </ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <input type="file" className="form-control form-control-lg" id="photo" name="photo" onChange={(e) => {setImage(e.target.value); imageHandle()}} /><br />
                            <img type="file" className="form-control form-control-lg" src={image} alt="preview image" onChange={(e) => setImage(e.target.value)} /><br />
                            <input type="text" className="form-control form-control-lg" value={title} placeholder="Post title" onChange={(e) => setTitle(e.target.value)} /><br />
                            <textarea type="text" className="form-control form-control-lg" value={description} placeholder="Post Description" onChange={(e) => setDescription(e.target.value)} /><br />
                            <button className="btn btn-dark btn-lg btn-block" id="inputBlog" type="button" onClick={postUpdate}>submit</button>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        </div>
    );
}

export default Blog;
