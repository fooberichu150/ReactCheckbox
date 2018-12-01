import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const defaultCssClasses = {
  checkBoxClass: "",
  labelClass: "label"
};

const Checkbox = props => {
  const { checked, name, label, classNames, size } = props;

  const icon = checked ? ["fas", "check-square"] : ["far", "square"];
  const classes = Object.assign({}, defaultCssClasses, classNames);

  const onCheckChanged = event => {
    const { checked } = props;
    event.stopPropagation();

    if (props.onChange !== null && props.onChange !== undefined) {
      props.onChange({
        name: props.name,
        checkState: !checked
      });
    }
  };

  return (
    <div className={`checkbox ${props.className || ""}`}>
      <FontAwesomeIcon
        className={classes.checkBoxClass}
        icon={icon}
        onClick={onCheckChanged}
        size={size}
      />
      {label && (
        <label
          className={classes.labelClass}
          onClick={onCheckChanged}
          dangerouslySetInnerHTML={{ __html: label }}
        />
      )}
      <input type="checkbox" name={name} checked={checked || false} readOnly />
    </div>
  );
};

export default Checkbox;
