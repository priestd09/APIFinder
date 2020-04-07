import React, { Component, ContextType } from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import AppContext from "../../AppContext";
import "./Accordion.scss";

interface Props {
  title: string;
}
class Accordion extends Component<Props & WithTranslation> {
  static contextType = AppContext;
  context!: ContextType<typeof AppContext>;

  render() {
    const { title } = this.props;
    return (
      <div className="Accordion">
        <div className="Accordion-button">
          <span className="Accordion-button--label is-size-7">{title}</span>
        </div>
        <div className="Accordion-content">{this.props.children}</div>
      </div>
    );
  }
}

export default withTranslation()(Accordion);
