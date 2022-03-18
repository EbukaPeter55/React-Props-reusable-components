export default function Author({name, imageUrl}){
	return (
    	<div className="author">
          <h2>{name}</h2>
          <img src={imageUrl} alt={name}/>
        </div>
    )
};