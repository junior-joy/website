import React from "react"
import { Helmet } from "react-helmet"
import { Swipeable } from 'react-swipeable'
import { GlobalStateContext } from "../components/globalState.js"
import View from "../components/view.js"
import "../components/layout.css"
import '../components/all.sass'
import { exitFullScreen } from "../util/fullScreenHelpers.js"
import Footer from "../components/footer.js"
//import theme from "../theme.yaml"

class PaginatedGalleryTemplate extends React.Component {

    componentDidMount() {
        exitFullScreen()
    }

    render() {

        const highlight = (this.props.location && this.props.location.state ? this.props.location.state.highlight : -1)
        const navigateBack = () => {
          if (typeof window !== 'undefined') {
            window.location.assign('/')
          }
        }
        return (<>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Gatsby Starter Photo Book</title>
                </Helmet>
                <GlobalStateContext.Consumer>
                    {globalState => (
                        <Swipeable
                          onSwipedRight={navigateBack}
                        >
                            <View
                                globalState={globalState}
                                pageContext={this.props.pageContext}
                                highlight={highlight}
                            />
                            <Footer />
                        </Swipeable>


                    )}
                </GlobalStateContext.Consumer>
        </>)
    }
}

export default PaginatedGalleryTemplate
