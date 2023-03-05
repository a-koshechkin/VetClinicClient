import { Component } from "react";
import './card-container.styles.css'

class CardContainer extends Component {
    render() {
        const { Id, Name, Type, Image, Birthday } = this.props;
        return (
            <div className="card-container" key={Id}>
                <img
                    alt={`animal ${Name}`}
                    src={`data:image/jpeg;base64,${Image}`}
                />
                <h2>{`Name: ${Name}`}</h2>
                <p>{`Type: ${Type}`}</p>
                <p>{`Birthday: ${(Birthday.split('T'))[0]}`}</p>
            </div>
        )
    }
}

export default CardContainer;