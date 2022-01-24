import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component'
import { ContentWrapper } from 'SourceComponent/ContentWrapper/ContentWrapper.component'
import ProgressContainer from 'Component/ProgressContainer/ProgressContainer.component'
import ProgressLine from 'Component/ProgressLine/ProgressLine.component'
import ProgressCircle from 'Component/ProgressCircle/ProgressCircle.component'
import _ from 'lodash'

export class Checkout extends SourceCheckout {


    renderStep() {
        const { checkoutStep } = this.props;
        const { render } = this.stepMap[checkoutStep];
        if (render) {
            return render();
        }

        return null;
    }

    renderProgressBar() {

        console.clear()
        let progressSteps = []
        if (_.size(this.stepMap) > 0) {
            let step = 1
            _.forOwn(this.stepMap, (value, key,) => {
                // console.log(value.areTotalsVisible)
                if (value.areTotalsVisible) {
                    progressSteps.push(
                        <>
                            <ProgressLine />
                            <ProgressCircle step={step} title={value.title.value} />
                        </>
                    )
                    step++
                }

            })
        }

        return (
            <ProgressContainer>
                {progressSteps}
                <ProgressLine />
            </ProgressContainer>
        )
    }

    render() {

        return (
            <main block="Checkout">
                {this.renderProgressBar()}
                <ContentWrapper
                    wrapperMix={{ block: 'Checkout', elem: 'Wrapper' }}
                    label={__('Checkout page')}
                >
                    {this.renderSummary(true)}
                    <div block="Checkout" elem="Step">
                        {this.renderTitle()}
                        {this.renderGuestForm()}
                        {this.renderStep()}
                        {this.renderLoader()}
                    </div>
                    <div>
                        {this.renderSummary()}
                        {this.renderPromo()}
                        {this.renderCoupon()}
                    </div>
                </ContentWrapper>
            </main>
        )
    }
}

export default Checkout