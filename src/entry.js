import './theme/global.styl';

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

requireAll(require.context('./', true, /^\.\/.*\.(jsx?)$/));

