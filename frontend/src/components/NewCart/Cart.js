import React from 'react';
import './Cart.css'

export default class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "",
            items: []
        }
    }

    updateMessage(event) {
        this.setState({
            message: event.target.value
        });
    }

    handleClick() {
        var items = this.state.items;

        items.push(this.state.message);

        this.setState({
            items: items,
            message: ""
        });
    }

    handleItemChanged(i, event) {
        var items = this.state.items;
        items[i] = event.target.value;

        this.setState({
            items: items
        });
    }

    handleItemDeleted(i) {
        var items = this.state.items;

        items.splice(i, 1);

        this.setState({
            items: items
        });
    }

    renderRows() {
        var context = this;

        return this.state.items.map(function (o, i) {
            return (
                <tr key={"item-" + i}>
                    <td onChange={context.handleItemChanged.bind(context, i)}/>
                    <td onChange={context.handleItemChanged.bind(context, i)}/>
                    <td onChange={context.handleItemChanged.bind(context, i)}/>
                    <td onChange={context.handleItemChanged.bind(context, i)}/>
                    <td onChange={context.handleItemChanged.bind(context, i)}/>

                    <td>
                        <button type="button" class="btn btn-dark"
                                onClick={context.handleItemDeleted.bind(context, i)}>Delete
                        </button>
                    </td>
                </tr>
            );
        });
    }

    render() {
        return (

            <div class="wrapper bg-white">
                <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex flex-column">
                        <div class="h3">My lists</div>
                        <div class="text-uppercase">6 sublists</div>
                    </div>
                    <div class="ml-auto btn"><span class="fas fa-cog"/></div>
                    <div class="btn" id="sub" onClick={this.handleClick.bind(this)}>
                        + Add sublist
                    </div>
                </div>
                <div
                    class="notification alert alert-dismissible fade show text-white d-flex align-items-center my-3 text-justify"
                    role="alert">
                    <span class="far fa-bell pr-2"/>
                    You've got 3 items on your list check it out!
                    <button type="button" class="close text-white ml-auto" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">
                        Ok, Thanks
                    </span>
                    </button>
                </div>
                <table className="table table-secondary table-striped">
                    <thead>
                    <tr>
                        <th scope="Booking-ID">Booking ID</th>
                        <th scope="Room-Type">Room Type</th>
                        <th scope="Hotel-Name">Hotel Name</th>
                        <th scope="Number-of-rooms">Number of rooms</th>
                        <th scope="Total Bill">Total Bill</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderRows()}
                    </tbody>
                </table>


            </div>
        );
    }
}

