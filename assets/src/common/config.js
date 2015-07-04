/**
 * @file 基本配置
 * @author shenli <meshenli@gmail.com>
 */

require.config({
    'baseUrl': './src',
    'packages': [
        {
            'name': 'winnie-ui',
            'location': '../../dep/winnie-ui/src',
            'main': 'Widget'
        },
        {
            'name': 'winnie',
            'location': '../../dep/winnie/src',
            'main': 'lib'
        },
        {
            'name': 'etpl',
            'location': '../../dep/etpl/3.0.0/src',
            'main': 'main'
        },
        {
            'name': 'kira',
            'location': '../../dep/kira/src',
            'main': 'main'
        },
        {
            'name': 'saber-storage',
            'location': '../../dep/saber-storage/1.0.0/src',
            'main': 'storage'
        }
    ],
    'paths': {}
});
