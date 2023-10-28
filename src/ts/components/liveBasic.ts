export class LiveGoBasicRes<T extends any> {
    status: number
    data: T;
}

export class LiveStatRes {
    publishers: Publisher[]
    players: any
}

class Publisher {
    key: string
    url: string
    stream_id: number
    video_total_bytes: number
    video_speed: number
    audio_total_bytes: number
    audio_speed: number
}
