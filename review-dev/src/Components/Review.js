import React from 'react';
import people from '../data';
import { FaChevronLeft, FaChevronRight,FaQuoteRight} from "react-icons/go";

export default function Review() {
    const [index,setIndex] = useState(0);
    const {name,job,image,text} = people[index];

    return (
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='personal-img'></img>
                <span className='quote-icon'>
                   <FaQuoteRight />
                </span>
            </div>

            <h4 className="author">{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='button-container'>
                <button classname="prev-btn">
                    <FaChevronLeft />
                </button>
                <button classname="next-btn">
                    <FaChevronRight />
                </button>
                <button classname="random-btn">
                    suprise me
                </button>
            </div>
        </article>
    )
}