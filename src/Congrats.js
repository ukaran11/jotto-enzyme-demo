export default function Congrats( props ) {
        if(props.success) {
            return (
                <div data-test="component-congrats">
                    <span data-test="congrats-message">
                        Congratulations! You guessed the word!
                    </span>
                </div>
            )
        } else {
            return (
                <div data-test="component-congrats" />
            )
        }
}