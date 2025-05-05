import { hkdf } from './crypto'

/**
 * LT Hash is a summation based hash algorithm that maintains the integrity of a piece of data
 * over a series of mutations. You can add/remove mutations and it'll return a hash equal to
 * if the same series of mutations was made sequentially.
 */

const o = 128

class d {

    salt: string

    constructor(e: string) {
        this.salt = e
    }
    add(e: Promise<ArrayBuffer>, t: string[]) {
        var r = this
        for(const item of t) {
            e = r._addSingle(e, item)
        }

        return e
    }
    subtract(e: Promise<ArrayBuffer>, t: string[]) {
        var r = this
        for(const item of t) {
            e = r._subtractSingle(e, item)
        }

        return e
    }
    subtractThenAdd(e: Promise<ArrayBuffer>, t: string[], r: string[]) {
        var n = this
        return n.add(n.subtract(e, r), t)
    }
    async _addSingle(e: Promise<ArrayBuffer>, t: string): Promise<ArrayBuffer> {
        var r = this
        const n = new Uint8Array(await hkdf(Buffer.from(t), o, { info: r.salt })).buffer
        return r.performPointwiseWithOverflow(await e, n, ((e, t) => e + t))
    }
    async _subtractSingle(e: Promise<ArrayBuffer>, t: string): Promise<ArrayBuffer> {
        var r = this

        const n = new Uint8Array(await hkdf(Buffer.from(t), o, { info: r.salt })).buffer
        return r.performPointwiseWithOverflow(await e, n, ((e, t) => e - t))
    }
    async performPointwiseWithOverflow(e: ArrayBuffer, t: ArrayBuffer, r: (arg0: number, arg1: number) => number): Promise<ArrayBuffer> {
        const n = new DataView(e)
          , i = new DataView(t)
          , a = new ArrayBuffer(n.byteLength)
          , s = new DataView(a)
        for(let e = 0; e < n.byteLength; e += 2) {
            s.setUint16(e, r(n.getUint16(e, !0), i.getUint16(e, !0)), !0)
        }

        return a
    }
}
export const LT_HASH_ANTI_TAMPERING = new d('WhatsApp Patch Integrity')
