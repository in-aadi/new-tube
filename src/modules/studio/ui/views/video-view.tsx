import { Suspense } from "react";
import { FormSection } from "../sections/form-section";
import { ErrorBoundary } from "react-error-boundary";

interface VideoViewProps {
	videoId: string;
}

export const VideoView = ({ videoId }: VideoViewProps) => {
	return (
		<Suspense fallback={<FormSelectionSkeleton />}>
			<ErrorBoundary fallback={<p>Error</p>}>
				<VideoViewSuspense videoId={videoId} />
			</ErrorBoundary>
		</Suspense>
	);
};

const FormSelectionSkeleton = () => {
	return <p>Loading...</p>;
};

const VideoViewSuspense = ({ videoId }: VideoViewProps) => {
	return (
		<div className="px-4 pt-2.5 max-w-screen-lg">
			<FormSection videoId={videoId} />
		</div>
	);
};
