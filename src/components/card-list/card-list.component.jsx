import { Component } from "react";
import './card-list.styles.css'
import CardContainer from "../card-container/card-container.component";

class CardList extends Component {
    render() {
        return (
            <div className="card-list">
                {this.props.animals.map((animal) => {
                    const { Id, Name, Type, Image, Birthday } = animal;
                    return (
                        <CardContainer
                            ID={Id}
                            Name={Name}
                            Type={Type}
                            Image={Image}
                            Birthday={Birthday}
                        />
                    )
                })}
            </div>
        );
    }
}

export default CardList;