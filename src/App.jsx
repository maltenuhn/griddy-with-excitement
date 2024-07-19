import { useState } from "react";
import "./App.css";

export const Content = (props) => (
  <div className="grid-item" style={{ ...props.style }}>
    {props.children}
  </div>
);

function App() {
  return (
    <>
      <h1>One Dimension</h1>
      <section>
        <h2>Simple defined</h2>
        <code>1fr 1fr</code>
        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
        </div>
      </section>
      <section>
        <h2>Diff units</h2>
        <code>20px 1fr 2em</code>
        <div className="grid" style={{ gridTemplateColumns: "20px 1fr 2em" }}>
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
        </div>
      </section>
      <section>
        <h2>Various alignments (grid, self)</h2>
        <code>
          gridAutoRows: 100, alignItems: "start", justifyContent: 'center'
        </code>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(5, 1fr)",
            gridAutoRows: 100,
            alignItems: "start",
            justifyItems: "center",
          }}
        >
          <Content />
          <Content style={{ border: "3px solid black", alignSelf: "end" }} />
          <Content />
          <Content />
          <Content
            style={{ border: "3px solid black", alignSelf: "stretch" }}
          />
          <Content />
          <Content
            style={{
              border: "3px solid black",
              alignSelf: "stretch",
              justifySelf: "end",
            }}
          />
          <Content />
          <Content />
        </div>
      </section>
      <section>
        <h2>repeat w/ auto-fit and minmax</h2>
        <code>repeat(auto-fit, minmax(200px, 1fr)); parent 500px wide</code>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            overflow: "scroll",
            border: "1px solid orange",
            width: 500,
            display: "grid",
          }}
        >
          <Content> (min 200px, max 1fr)</Content>
          <Content> (min 200px, max 1fr)</Content>
          <Content> (min 200px, max 1fr)</Content>
        </div>
      </section>
      <section>
        <h2>auto-fit vs auto-fill</h2>
        <code>
          top: repeat(auto-fit, minmax(200px, 1fr)) bottom: repeat(auto-fill,
          minmax(200px, 1fr))
        </code>
        <p>
          Yes, auto-fit <i>fills</i> the available space, auto-fill does not.
          SMH.
        </p>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            overflow: "scroll",
            border: "1px solid orange",
            width: 900,
            display: "grid",
          }}
        >
          <Content> (min 200px, max 1fr)</Content>
          <Content> (min 200px, max 1fr)</Content>
          <Content> (min 200px, max 1fr)</Content>
        </div>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            overflow: "scroll",
            border: "1px solid orange",
            width: 900,
            display: "grid",
          }}
        >
          <Content> (min 200px, max 1fr)</Content>
          <Content> (min 200px, max 1fr)</Content>
          <Content> (min 200px, max 1fr)</Content>
        </div>
      </section>
      <section>
        <h2>auto-fit vs auto-fill with middle item justifySelf: end</h2>
        <code>
          top: repeat(auto-fit, minmax(200px, 1fr)) bottom: repeat(auto-fill,
          minmax(200px, 1fr))
        </code>
        <p>
          Yes, auto-fit <i>fills</i> the available space, auto-fill does not.
          SMH.
        </p>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            overflow: "scroll",
            border: "1px solid orange",
            width: 900,
            display: "grid",
          }}
        >
          <Content> (min 200px, max 1fr)</Content>
          <Content style={{ border: "3px solid black", justifySelf: "end" }}>
            <code> JustifySelf: end</code>
          </Content>
          <Content> (min 200px, max 1fr)</Content>
        </div>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            overflow: "scroll",
            border: "1px solid orange",
            width: 900,
            display: "grid",
          }}
        >
          <Content> (min 200px, max 1fr)</Content>
          <Content style={{ border: "3px solid black", justifySelf: "end" }}>
            <code> JustifySelf: end</code>
          </Content>
          <Content> (min 200px, max 1fr)</Content>
        </div>
      </section>
      <section>
        <h2>auto-fit vs auto-fill multi-row w/ justify-self</h2>
        <code>
          top: repeat(auto-fit, minmax(200px, 1fr)) bottom: repeat(auto-fill,
          minmax(200px, 1fr))
        </code>
        <p>
          Two extra items, and extra <code>justifyItems, alignItems</code>. Note
          how they are identical.
        </p>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            justifyItems: "center",
            overflow: "scroll",
            border: "1px solid orange",
            width: 900,
            display: "grid",
          }}
        >
          <Content> (min 200px, max 1fr)</Content>
          <Content style={{ border: "3px solid black", justifySelf: "end" }}>
            <code> JustifySelf: end</code>
          </Content>
          <Content> (min 200px, max 1fr)</Content>
          <Content> (min 200px, max 1fr)</Content>
          <Content> (min 200px, max 1fr)</Content>
        </div>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            justifyItems: "center",
            alignItems: "center",
            overflow: "scroll",
            border: "1px solid orange",
            width: 900,
            display: "grid",
          }}
        >
          <Content> (min 200px, max 1fr)</Content>
          <Content style={{ border: "3px solid black", justifySelf: "end" }}>
            <code> JustifySelf: end</code>
          </Content>
          <Content> (min 200px, max 1fr)</Content>
          <Content> (min 200px, max 1fr)</Content>
          <Content> (min 200px, max 1fr)</Content>
        </div>
      </section>
      <h1>TWO DIMENSIONS</h1>
      <section>
        <h2>GridTemplateFlow</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          {["row", "column", "row dense", "column dense"].map((x) => (
            <div key={x}>
              <p>
                <code>gridTemplateFlow: {x}</code>
              </p>
              <div
                className="grid"
                style={{
                  width: 400,
                  height: 300,
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gridTemplateRows: "1fr 1fr 1fr",
                  gridAutoFlow: x,
                  border: "1px solid orange",
                }}
              >
                <Content style={{ gridColumn: "auto/span 2" }}>
                  {" "}
                  auto / span2
                </Content>
                <Content style={{ gridColumn: "auto/span 2" }}>
                  {" "}
                  auto / span2
                </Content>
                <Content />
                <Content />
                <Content />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
