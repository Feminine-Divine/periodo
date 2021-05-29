import React from "react";
import BeautyStars from "beauty-stars";
import style from "./Flow.module.css";
import Grid from "@material-ui/core/Grid";
import { VictoryChart, VictoryLine, VictoryTheme, VictoryContainer } from "victory";

export default class App extends React.Component {
  state = {
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0,
    value5: 0,
    value6: 0,
    value7: 0,
    value8: 0,
  };
  colour = "#ffffff";
  size = "18px";
  render() {
    console.log(this.state.value1);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Grid
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "50px",
          }}
        >
          <div className={style.container}>
            <div className={style.container1}>
              <p className={style.heading}>Blood Flow:</p>
              <div className={style.stars}>
                <BeautyStars
                  value={this.state.value1}
                  onChange={(value) => this.setState({ value1: value })}
                  inactiveColor={this.colour}
                  size={this.size}
                />
              </div>
            </div>
            <div className={style.container2}>
              <p className={style.heading}>Period Pain:</p>
              <div className={style.stars}>
                <BeautyStars
                  value={this.state.value2}
                  onChange={(value) => this.setState({ value2: value })}
                  inactiveColor={this.colour}
                  size={this.size}
                />
              </div>
            </div>
            <div className={style.container3}>
              <p className={style.heading}>Mood:</p>
              <div className={style.stars}>
                <BeautyStars
                  value={this.state.value3}
                  onChange={(value) => this.setState({ value3: value })}
                  inactiveColor={this.colour}
                  size={this.size}
                />
              </div>
            </div>
          </div>
          <div className={style.container}>
            <div className={style.container4}>
              <p className={style.heading}>Weakness:</p>
              <div className={style.stars}>
                <BeautyStars
                  value={this.state.value4}
                  onChange={(value) => this.setState({ value4: value })}
                  inactiveColor={this.colour}
                  size={this.size}
                />
              </div>
            </div>
            <div className={style.container6}>
              <p className={style.heading}>Acne:</p>
              <div className={style.stars}>
                <BeautyStars
                  value={this.state.value6}
                  onChange={(value) => this.setState({ value6: value })}
                  inactiveColor={this.colour}
                  size={this.size}
                />
              </div>
            </div>
            <div className={style.container7}>
              <p className={style.heading}>Bloating:</p>
              <div className={style.stars}>
                <BeautyStars
                  value={this.state.value7}
                  onChange={(value) => this.setState({ value7: value })}
                  inactiveColor={this.colour}
                  size={this.size}
                />
              </div>
            </div>
          </div>
          <div className={style.container_medium}>
            <div className={style.container3_medium}>
              <p className={style.heading}>Mood:</p>
              <div className={style.stars}>
                <BeautyStars
                  value={this.state.value3}
                  onChange={(value) => this.setState({ value3: value })}
                  inactiveColor={this.colour}
                  size={this.size}
                />
              </div>
            </div>
            <div className={style.container3_medium}>
              <p className={style.heading}>Acne:</p>
              <div className={style.stars}>
                <BeautyStars
                  value={this.state.value6}
                  onChange={(value) => this.setState({ value6: value })}
                  inactiveColor={this.colour}
                  size={this.size}
                />
              </div>
            </div>
          </div>

          <div className={style.container}>
            <div className={style.container5}>
              <p className={style.heading}>Breast Tenderness:</p>
              <div className={style.stars5}>
                <BeautyStars
                  value={this.state.value5}
                  onChange={(value) => this.setState({ value5: value })}
                  inactiveColor={this.colour}
                  size={this.size}
                />
              </div>
            </div>
            <div className={style.container8}>
              <p className={style.heading}>HairLoss:</p>
              <div className={style.stars}>
                <BeautyStars
                  value={this.state.value8}
                  onChange={(value) => this.setState({ value8: value })}
                  inactiveColor={this.colour}
                  size={this.size}
                />
              </div>
            </div>
          </div>
        </Grid>
        <VictoryChart
         containerComponent={<VictoryContainer responsive={false} style={{marginTop: 300}}/>}
        height={600} width={800}
            theme={VictoryTheme.material}
          >
            <VictoryLine
              style={{
                data: { stroke: "#c43a31" },
                parent: { border: "1px solid #ccc"}
              }}
              data={[
                { x: 'Blood Flow', y: this.state.value1 },
                { x: 'Period Pain', y: this.state.value2 },
                { x: 'Mood', y: this.state.value3 },
                { x: 'Weakness', y: this.state.value4 },
                { x: 'Acne', y: this.state.value5 },
                { x: 'Bloating', y: this.state.value6 },
                { x: 'Breast Tenderness', y: this.state.value7 },
                { x: 'HairLoss', y: this.state.value8 },
              ]}
            />
          </VictoryChart>        
      </div>
    );
  }
}
