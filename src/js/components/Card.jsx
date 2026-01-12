import React from "react";

const Card = () => {
    const cards = [
		{
			img: "https://picsum.photos/id/237/200/300",
			cardTitle: "Card Title 1",
			cardBody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			buttonLabel: "Find Out More!"
		},
		{
			img: "https://picsum.photos/seed/picsum/200/300",
			cardTitle: "Card Title 2",
			cardBody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			buttonLabel: "Find Out More!"
		},
		{
			img: "https://picsum.photos/200/300?grayscale",
			cardTitle: "Card Title 3",
			cardBody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			buttonLabel: "Find Out More!"
		},
		{
			img: "https://picsum.photos/200/300/?blur",
			cardTitle: "Card Title 4",
			cardBody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			buttonLabel: "Find Out More!"
		}
	];
    return (
        <div className="container">
				<div className="row">
					{cards.map((card, index) => (
						<div className="col-md-3" key={index}>
							<div class="card" >
								<img src={card.img} alt="" className="card-img-top" />
								<div class="card-body">
									<h5 class="card-title">{card.cardTitle}</h5>
									<p class="card-text">{card.cardBody}</p>
									<a href="#" class="btn btn-primary">{card.buttonLabel}</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
    )

}

export default Card