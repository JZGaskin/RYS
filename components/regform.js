import React from "react";

class RegForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getData() {
    setTimeout(() => {
      console.log("Our data is fetched");
      this.setState({
        data: (
          <div id="mform">
            <div
              id="mf_placeholder"
              data-formurl="https://littleeaglefootball.forms-db.com/embed.php?id=13573"
              data-formheight="4326"
              data-formtitle="2021 Softball Registration"
              data-paddingbottom="10"
            />
            <script>
              {(function (f, o, r, m) {
                r = f.createElement("script");
                r.async = 1;
                r.src = o + "js/mf.js";
                m = f.getElementById("mf_placeholder");
                document.getElementsByTagName("body")[0].insertBefore(r, m);
              })(document, "https://littleeaglefootball.forms-db.com/")}
            </script>
          </div>
        ),
      });
    }, 10);
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return <div>{this.state.data}</div>;
  }
}

export default RegForm;
