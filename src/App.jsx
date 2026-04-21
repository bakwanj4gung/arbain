import { useState } from "react";
import Modal from "./components/Modal";
import { dictionary } from "./components/Dictionary";
import ModalContent from "./components/ModalContent";

const TermButton = ({ termKey, className, children, onOpen }) => (
    <span 
        className={`${className} open-modal me-2`} 
        onClick={() => onOpen(termKey)}
    >
        {children}
    </span>
);

function App() {
    const [activeTermKey, setActiveTermKey] = useState(null);
    const closeModal = () => setActiveTermKey(null);
    const activeData = activeTermKey ? dictionary[activeTermKey] : null;

    return (
        <>
            <h1 className="text-5xl font-bold text-center p-4">الحديث التاسع عشر</h1>
            <div className="content mt-14 space-y-8 text-2xl leading-loose text-right">
                <p>
                    <TermButton termKey="ibnuAbbas" className="rawi-sahabi" onOpen={setActiveTermKey}>عَنْ أَبِي عَبَّاسٍ عَبْدِ اللهِ بنِ عَبَّاسٍ ﵄ </TermButton>
					<span>قَالَ: كُنْتُ </span>
					<TermButton termKey="khalfaNabi" onOpen={setActiveTermKey}>خَلْفَ النبي ﷺ </TermButton>
                    <span>يَومَاً فَقَالَ: </span>
					<span className="matan">
						<span>يَا غُلامُ! إِنّي أُعَلِّمُكَ كَلِمَاتٍ: </span>
						<TermButton termKey="ihfadzillah" onOpen={setActiveTermKey}>احْفَظِ اللهَ </TermButton>
						<TermButton termKey="yahfadzka" onOpen={setActiveTermKey}>يَحفَظك </TermButton>
						<span>احْفَظِ اللهَ </span>
						<TermButton termKey="tajidhuTujahak" onOpen={setActiveTermKey}>تَجِدهُ تُجَاهَكَ، </TermButton>
						<span>إِذَا سَأَلْتَ فَاسْأَلِ اللهَ، وَإِذَا اسْتَعَنتَ فَاسْتَعِن بِاللهِ، وَاعْلَم أَنَّ الأُمّة لو اجْتَمَعَت عَلَى أن يَنفَعُوكَ بِشيءٍ لَمْ يَنْفَعُوكَ إِلّا بِشيءٍ قَد كَتَبَهُ اللهُ لَك، وإِن اِجْتَمَعوا عَلَى أَنْ يَضُرُّوكَ بِشيءٍ لَمْ يَضروك إِلّا بشيءٍ قَد كَتَبَهُ اللهُ عَلَيْكَ </span>
						<TermButton termKey="rufiatAqlam" onOpen={setActiveTermKey}>رُفعَت الأَقْلامُ، وَجَفّتِ الصُّحُفُ </TermButton>
					</span>
					<span className="rawi-imam">رواه الترمذي وقال: حديث حسن صحيح</span>  
                </p>
                <p>
                    <span className="rawi-imam">وفي رواية غير الترمذي:</span>
                    <span className="matan">
						<span>اِحفظِ اللهَ تَجِدْهُ أَمَامَكَ، </span>
						<TermButton termKey="taarrafIlallah" onOpen={setActiveTermKey}>تَعَرَّفْ إلى اللهِ في الرَّخاءِ يَعرِفْكَ في الشّدةِ، </TermButton>
						<span>وَاعْلَمْ أنَّ </span>
						<TermButton termKey="maAkhtaak" onOpen={setActiveTermKey}>مَا أَخْطَأَكَ لَمْ يَكُن لِيُصيبَكَ، وَمَا أَصَابَكَ لَمْ يَكُن لِيُخطِئكَ، </TermButton>
						<span>وَاعْلَمْ أنَ </span>
						<TermButton termKey="nasrMaaSabr" onOpen={setActiveTermKey}>النَّصْرَ مَعَ الصَّبْرِ، </TermButton>
						<span>وَأَنَّ </span>
						<TermButton termKey="farajMaaKarb" onOpen={setActiveTermKey}>الفَرَجَ مَعَ الكَربِ، </TermButton>
						<span>وَأَنَّ مَعَ العُسرِ يُسراً</span>
					</span>
                </p>
            </div>

            <Modal 
				isOpen={!!activeData}
				onClose={closeModal} 
				title={activeData?.title} 
			>
				{activeData && <ModalContent content={activeData.content} />}
			</Modal>
        </>
    );
}

export default App;