import React, { useEffect, useState } from 'react'
const data=[
    {
      id: 1,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
      name: 'maria ferguson',
      title: 'office manager',
      quote:
        'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
    },
    {
      id: 2,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      name: 'john doe',
      title: 'regular guy',
      quote:
        'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
    },
    {
      id: 3,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
      name: 'peter smith',
      title: 'product designer',
      quote:
        'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
    },
    {
      id: 4,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      name: 'susan andersen',
      title: 'the boss',
      quote:
        'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
    },
  ];

const Slider=()=>{
  const [person,setPerson]=useState(data[0]);
  
  const generateId=()=>'person-'+(person.id-1);
  function handleNext(){
    setPerson((prevPerson)=>(prevPerson.id==data.length)?data[0]:data[prevPerson.id]) 
  }

  function handlePrev(){
    setPerson((prevPerson)=>(prevPerson.id==1)?data[data.length-1]:data[prevPerson.id-2]) 
  }
  
  useEffect(()=>{
    setInterval(() => {
      handleNext();
      },3000);
  },[]);

    return <div className='Slider'>
        <h1 id='review-heading'>Reviews</h1>
        <div id='review-container'>
                <section id={generateId()}>
                        <p>ID: {person.id}</p>
                        <img width={"200px"} src={person.image}/>
                        <p>Name: {person.name}</p>
                        <p>Title: {person.title}</p>
                        <p>Quote: {person.quote}</p>
                        <div className='navigationBtns'>
                          <button className="prev" onClick={handlePrev}>Prev</button>
                          <button className="next" onClick={handleNext}>Next</button>
                        </div>
                    </section>
        </div>
    </div>
}
export default Slider