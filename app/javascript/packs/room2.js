import Vue from 'vue/dist/vue.esm'
const app = new Vue({
    el: '#app',
    data: {
        audios: [],
        videos: [],
        selectedAudio: '',
        selectedVideo: ''
    },

    methods: {
        onChange: function (){
            if(this.selectedAudio != '' && this.selectedVideo != ''){
                this.connectLocalCamera();
            }
        },

        connectLocalCamera: async function (){
            const constraints = {
                audio: this.selectedAudio ? { deviceId: { exact: this.selectedAudio } } : false,
                video: this.selectedVideo ? { deviceId: { exact: this.selectedVideo } } : false
            }

            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            document.getElementById('my-video').srcObject = stream;
        }
    },

    mounted: async function () {
        //デバイスへのアクセス
        const deviceInfos = await navigator.mediaDevices.enumerateDevices();

        //オーディオデバイスの情報を取得
        deviceInfos
        .filter(deviceInfo => deviceInfo.kind === 'audioinput')
        .map(audio => this.audios.push({text: audio.label || `Microphone ${this.audios.length + 1}`, value: audio.deviceId}));

        //カメラの情報を取得
        deviceInfos
        .filter(deviceInfo => deviceInfo.kind === 'videoinput')
        .map(video => this.videos.push({text: video.label || `Camera  ${this.videos.length - 1}`, value: video.deviceId}));

        console.log(this.audios, this.videos);
    }
});
