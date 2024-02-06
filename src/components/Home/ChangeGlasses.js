import React, { Component } from "react";
import style from "../../assets/css/ChangeGlasses.module.css";
import data from "../../assets/json/dataGlasses.json";

export default class ChangeGlasses extends Component {
  state = {
    glasses: "",
  };

  currentGlasses = {};
  saveValueStorage = (key, value) => {
    let stringValue = JSON.stringify(value);
    localStorage.setItem(key, stringValue);
  };

  getvalueStorage = (key) => {
    let dataLocal = localStorage.getItem(key);
    if (dataLocal) {
      let value = JSON.parse(dataLocal);
      this.state.glasses = value;
      this.currentGlasses = value;
      this.saveValueStorage(key, value);
    }
  };

  changeGlasses = (item, id) => {
    console.log("Item", item);
    let itemLists = document.querySelectorAll(`.${style.glasses_item}`);

    itemLists.forEach((itemList) => {
      if (itemList.classList.contains(style.chosen)) {
        itemList.classList.remove(style.chosen);
      }
    });

    if (item.id !== this.currentGlasses.id) {
      this.setState({ glasses: item });
      this.currentGlasses = item;
      itemLists[id].classList.add(style.chosen);
      this.saveValueStorage("State", item);
    } else {
      this.currentGlasses = {};
      this.setState({ glasses: "" });
      this.saveValueStorage("State", "");
    }
  };

  renderGlasses = () => {
    return data.map((e, id) => {
      return (
        <div key={id} className="col-2 mb-4">
          <div
            onClick={() => {
              this.changeGlasses(e, id);
            }}
            className={`${style.glasses_item} ${
              id == this.state.glasses.id - 1 ? style.chosen : ""
            }`}
          >
            <img src={e.url} alt="" />
          </div>
        </div>
      );
    });
  };

  renderLeftModel = () =>
    data.map((e) => {
      let { name, desc, url } = e,
        { information, item, inner } = style;
      if (e.id === 7) {
        return (
          <div key={e.id} className={inner}>
            <img src={url} alt="" className={item} />
            <div className={information}>
              <h3 className={style.name}>{name}</h3>
              <p className={style.desc}>{desc}</p>
            </div>
          </div>
        );
      }
    });

  renderRightModel = () => {
    let data = this.state.glasses,
      { information, item, inner } = style;
    if (data != "") {
      let { name, desc, url } = data;
      return (
        <div className={inner}>
          <img src={url} alt="" className={item} />
          <div className={information}>
            <h3 className={style.name}>{name}</h3>
            <p className={style.desc}>{desc}</p>
          </div>
        </div>
      );
    }
  };

  render() {
    const { model, model_left, model_right, glasses } = style;
    this.getvalueStorage("State");
    return (
      <div className="container pb-3">
        <div className={model}>
          <div className={model_left}>{this.renderLeftModel()}</div>

          <div className={model_right}>{this.renderRightModel()}</div>
        </div>

        <div className={glasses}>
          <div className="row">{this.renderGlasses()}</div>
        </div>
      </div>
    );
  }
}
