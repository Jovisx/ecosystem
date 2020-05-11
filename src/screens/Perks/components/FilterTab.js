import React from "react";
import "./index.css";
class FilterTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offers: []
    };
  }
  render() {
    const { filter_View } = this.props;
    return (
      <div className="filter_tab">
        <button className="btn" onClick={() => filter_View("all")}>
          View All
        </button>
        <button className="btn" onClick={() => filter_View("Top 10")}>
          Top 10
        </button>
        <button className="btn" onClick={() => filter_View("Entertainment")}>
          Entertainment
        </button>
        <button className="btn" onClick={() => filter_View("Food and Drink")}>
          Food & Drink
        </button>
        <button
          className="btn"
          onClick={() => filter_View("Beauty & Wellbeing")}
        >
          Beauty & Wellbeing
        </button>
        <button className="btn" onClick={() => filter_View("Fashion")}>
          Fashion
        </button>
        <button className="btn" onClick={() => filter_View("Home")}>
          Home
        </button>
        <button className="btn" onClick={() => filter_View("Tech")}>
          Tech
        </button>
      </div>
    );
  }
}

export default FilterTab;
