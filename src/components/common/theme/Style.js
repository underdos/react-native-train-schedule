import Color from './Color';

const HeaderStyle = {
    container: {
        backgroundColor: Color.defaultPrimaryColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        elevation: 5
    },
    leftIcon: {
        justifyContent: 'flex-start'
    },
    leftIconImage: {
        marginLeft: 10
    },
    titleHeader: {
        justifyContent: 'center'
    },
    titleHeaderText: {
        fontSize: 20,
        color: Color.textPrimaryColor
    },
    rightIcon: {
        justifyContent: 'flex-end'
    },
    rightIconImage: {
        marginRight: 10
    }
}

const SpinnerStyle = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

const SplashScreenStyle = {
    container: {
        backgroundColor: Color.defaultPrimaryColor,
        flexDirection: 'column',
        flex: 1
    },
    body: {
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerlogo: {
        width: 150,
        height:150
    },
    logo: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'contain'
    },
    textLogo: {
        color: Color.primaryTextColor,
        fontSize: 20,
        fontWeight: 'bold'
    },
    containerLoader: {
        width: 70,
        height: 70
    },
    loader: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'contain'
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    footerText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: Color.textPrimaryColor,
        marginBottom: 10
    }
}

export { HeaderStyle, SpinnerStyle, SplashScreenStyle };